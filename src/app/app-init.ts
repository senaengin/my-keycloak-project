import {KeycloakOptions, KeycloakService} from 'keycloak-angular';
import { environment } from '../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {
  const options: KeycloakOptions = {
    config:{
      url: environment.keycloakConfig.url,
      realm: environment.keycloakConfig.realm,
      clientId: environment.keycloakConfig.clientId
    },
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'check-sso',
      checkLoginIframe: false
    },
    bearerExcludedUrls: []
  };
  return () => keycloak.init(options);
}
