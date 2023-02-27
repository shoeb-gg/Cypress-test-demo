describe('Module Tests 1', () => {
    it('Testing Site, Company, Contact modules', () => {
        cy.visit('/');

        cy.wait(8000);
        cy.visit('crm/sites');
        cy.wait(3000);

        cy.get('.e-row > .customcss').click();
        cy.wait(2000);

        cy.get('.ng-star-inserted.ng-touched > .flex > .ml-4').click();

        cy.wait(3000);
        cy.visit('crm/sites/f2e7890c-aabd-42b3-a57d-bed772ac50b1/documents');

        cy.wait(5000);
        cy.get('#overview_tb_newfolder').click();
        cy.get('#newname').type('Test7');
        cy.get('.e-footer-content > .e-fe-popup').click();
        cy.wait(2000);

        cy.visit('crm/sites/f2e7890c-aabd-42b3-a57d-bed772ac50b1/tasks');
        cy.wait(5000);
        cy.get(
            '#task-94b6ba9e-94f9-4c94-b565-04cedc3ca890 > .relative > .flex'
        ).click();
        cy.get('.absolute > .ml-2 > .mat-button-wrapper').click();

        cy.visit('crm/sites/f2e7890c-aabd-42b3-a57d-bed772ac50b1/invoices');
        cy.wait(3000);

        cy.get('.e-templatecell').click();
        cy.wait(3000);
        cy.get('.flex-row > :nth-child(1) > .mat-button-wrapper').click();
        cy.get('div.ng-star-inserted > .flex > .ml-4').click();
        cy.get(':nth-child(3) > .mat-button-wrapper').click();
        cy.wait(2000);

        cy.visit('crm/sites/f2e7890c-aabd-42b3-a57d-bed772ac50b1/deliveries');
        cy.wait(8000);
        cy.get('.e-toolbar-left > .e-toolbar-item').click();
        cy.get(
            '.min-h-screen > .items-center > .mat-focus-indicator > .mat-button-wrapper'
        ).click();
        cy.wait(2000);
        cy.get('[aria-label=" column header Status"]').click();
        cy.get('.e-toolbar-right > :nth-child(1)').click();
        cy.get('.flex-row > .mat-focus-indicator').click();

        cy.visit('crm/companies');
        cy.get('.z-20').click();

        cy.wait(2000);
        cy.visit('crm/contacts');
        cy.wait(5000);
        cy.get(
            '[ng-reflect-router-link="./,5b11507d-6484-41fa-8c0e-733"]'
        ).click();
    });
});
