/*
Copyright © 2023 - 2024 SUSE LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import '~/support/commands';
import * as cypressLib from '@rancher-ecp-qa/cypress-library';
import { qase } from 'cypress-qase-reporter/dist/mocha';

Cypress.config();
describe('User role testing', () => {
  const stdUser       = "std-user"
  const uiPassword    = "rancherpassword"

  beforeEach(() => {
    cy.visit('/');
  });

  qase(15,
    it('Create standard user', () => {
      cy.login();
      cypressLib.burgerMenuToggle();
      cypressLib.createUser(stdUser, uiPassword);
    })
  );
});

