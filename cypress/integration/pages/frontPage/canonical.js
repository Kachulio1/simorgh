import config from '../../../support/config/services';

const serviceHasFrontPage = service =>
  config[service].pageTypes.frontPage !== undefined;

Object.keys(config)
  .filter(serviceHasFrontPage)
  .forEach(service => {
    describe(`Frontpage Canonical tests for ${service}`, () => {
      // eslint-disable-next-line no-undef
      before(() => {
        cy.visit(config[service].pageTypes.frontPage);
      });

      describe('checks the components are present', () => {
        // eslint-disable-next-line no-undef
        before(() => {
          cy.viewport(1008, 768);
        });

        describe('header tests', () => {
          it('should have a visible banner', () => {
            cy.get('header')
              .should('have.lengthOf', 1)
              .find('div[class^="Banner"]')
              .children()
              .should('have.lengthOf', 1)
              .children()
              .should('have.attr', 'href', config[service].pageTypes.frontPage)
              .find('svg')
              .should('be.visible');
          });

          it('should not have an AMP attribute', () => {
            cy.get('html').should('not.have.attr', 'amp');
          });

          it('should have one visible navigation', () => {
            cy.get('nav')
              .should('have.lengthOf', 1)
              .should('be.visible');
          });

          it('should have a visually hidden top-level header', () => {
            cy.get('h1').should('have.length', 1);
          });
        });

        describe('section tests', () => {
          it('should be labelled by a visible section label', () => {
            cy.get('section')
              .should('have.length.of.at.least', 1)
              .should('be.visible')
              .each($section => {
                cy.wrap($section).within(() => {
                  cy.get('h2').should('have.lengthOf', 1);
                });
              });
          });

          it('should contain at least one story promo', () => {
            cy.get('section').within(() => {
              cy.get('img')
                .should('have.length.of.at.least', 1)
                .should('be.visible');
              cy.get('h3')
                .should('have.length.of.at.least', 1)
                .should('be.visible')
                .find('a')
                .should('have.attr', 'href');
              cy.get('p')
                .should('have.length.of.at.least', 1)
                .should('be.visible');
              cy.get('time')
                .should('have.length.of.at.least', 1)
                .should('be.visible');
            });
          });
        });

        describe('footer tests', () => {
          it('should have a visible footer', () => {
            cy.get('footer')
              .should('have.length', 1)
              .should('have.attr', 'role', 'contentinfo')
              .find('a')
              .should('have.attr', 'href', config[service].pageTypes.frontPage)
              .find('svg')
              .should('be.visible');
          });
        });
      });
    });
  });
