export enum AuthProvider {
  CREDENTIAL = "CREDENTIAL",
  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
}
export interface IAuthProvider {
  provider: AuthProvider;
  providerId: string;
} 