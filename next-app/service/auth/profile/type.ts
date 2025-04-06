export type ClientPrincipalType = {
  clientPrincipal: {
    identityProvider: string;
    userDetails: string;
    userId: string;
    userRoles: string[];
    claims?: {
      typ: string;
      val: string;
    }[];
  };
};
