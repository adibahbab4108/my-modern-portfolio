import passport from "passport";
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";
import envVariables from "./env.config";
import { User } from "../modules/user/user.model";
import { AuthProvider, IUser } from "../modules/user/user.interface";

passport.use(
  new GoogleStrategy(
    {
      clientID: envVariables.GOOGLE_CLIENT_ID,
      clientSecret: envVariables.GOOLE_CLIENT_SECRET,
      callbackURL: envVariables.GOOGLE_CALLBACK_URL,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        const email = profile.emails?.[0].value;
        if (!email) {
          return done(null, false, { message: "No email found" });
        }
        let user = await User.findOne({ email });
        if (!user) {
          user = await User.create({
            email,
            name: profile.displayName,
            picture: profile.photos?.[0].value,
            isVerified: true,
            authProvider: [
              {
                provider: AuthProvider.GOOGLE,
                providerId: profile.id,
              },
            ],
          });
        }

        return done(null, user);
      } catch (error) {
        console.log("Google Strategy error");
        return done(error);
      }
    }
  )
);

// Store user data in the session after authentication.
passport.serializeUser((user: Partial<IUser>, done) => {
  done(null, user._id);
});

// Later, when a request comes in, Passport use, this fetches the full user from the DB using the stored _id
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user as Partial<IUser>);
  } catch (error) {
    done(error as Error, null);
  }
});
// Frontend → `localhost:5000/api/v1/auth/google` → Passport.js (Google OAuth Strategy) → Google Consent Page → Gmail Login → Redirect to Callback URL (`/api/v1/auth/google/callback`) → Verify user with Google profile → Check if user exists in DB → If not, create new user → Generate JWT access & refresh tokens → Store/Send tokens (cookie or response) → Redirect to frontend (success page/dashboard).
