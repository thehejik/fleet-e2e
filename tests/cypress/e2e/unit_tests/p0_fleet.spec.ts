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

beforeEach(() => {
  cy.login();
  cy.visit('/');
  cypressLib.burgerMenuToggle();
  cypressLib.checkNavIcon('cluster-management').should('exist');
});


Cypress.config();
describe('Fleet Deployment Test Cases', () => {

  qase(62,
    it('FLEET-62: Deploy application to local cluster', () => {
      const repoName = "local-cluster-fleet-62"
      const branch = "master"
      const path = "simple-chart"
      const repoUrl = "https://github.com/rancher/fleet-test-data/"
      
      // TODO: When this issue is resolved https://github.com/rancher/fleet/issues/2128
      // use repoUrl = 'https://github.com/rancher/fleet-examples', path = 'simple-chart'
      // and check in Deployments that resources 'frontend', 'redis-master', 'redis-slave' are ok

      // Click on the Continuous Delivery's icon
      cypressLib.accesMenu('Continuous Delivery');
      cypressLib.accesMenu('Git Repos');

      // Change namespace to fleet-local
      cy.contains('fleet-').click();
      cy.contains('fleet-local').should('be.visible').click();

      // Add Fleet repository and create it
      cy.addFleetGitRepo(repoName, repoUrl, branch, path);
      cy.clickButton('Create');

      // Assert repoName exists and its state is 1/1
      cy.verifyTableRow(0, repoName, ' ');
      cy.open3dotsMenu( repoName, 'Force Update');
      cy.verifyTableRow(0, '1/1', ' ');
      cy.contains("already exists").should('not.exist');

      // Delete created repo
      cypressLib.burgerMenuToggle();
      cypressLib.accesMenu('Continuous Delivery');
      cypressLib.accesMenu('Git Repos');
      cy.verifyTableRow(0, repoName, ' ');

      // Delete all git repos
      cy.deleteAll();
      cy.contains('No repositories have been added').should('be.visible')
    })
  );


});

