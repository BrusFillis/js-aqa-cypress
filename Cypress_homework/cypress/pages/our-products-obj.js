class OurProducts {

    openOurProducts(){
        cy.visit('http://webdriveruniversity.com/Page-Object-Model/products.html');
    }

    getNavbarButton() {
        return cy.get('.navbar-toggle');
    }

    getNavBarTitle() {
        return cy.get('#nav-title');
    }

    getHomeLink() {
        return cy.get('.nav.navbar-nav li:nth-child(1)');
    }
     
    getProductsLink() {
        return cy.get('.nav.navbar-nav li:nth-child(2)');
    }
     
    getContactUsLink() {
        return cy.get('.nav.navbar-nav li:nth-child(3)');
    }

    getSpecialOffersTitle() {
        return cy.contains('Special Offers');
    }

    getSpecialOffersImage() {
        return cy.get('#amp-img');
    }

    getCamerasTitle() {
        return cy.contains('Cameras');
    }

    getCamerasImage() {
        return cy.get('#camera-img');
    }

    getNewLaptopsTitle() {
        return cy.contains('New Laptops');
    }

    getNewLaptopsImage() {
        return cy.get('#laptop1');
    }

    getUsedLaptopsTitle() {
        return cy.contains('Used Laptops');
    }

    getUsedLaptopsImage() {
        return cy.get('#laptop2');
    }

    getGameConsolesTitle() {
        return cy.contains('Game Consoles');
    }

    getGameConsolesImage() {
        return cy.get('#nintendo');
    }

    getComponentsTitle() {
        return cy.contains('Components');
    }

    getComponentsImage() {
        return cy.get('#graphic-card');
    }

    getDesktopSystemsTitle() {
        return cy.contains('Desktop Systems');
    }

    getDesktopSystemsImage() {
        return cy.get('#computer');
    }

    getAudioTitle() {
        return cy.contains('Audio');
    }

    getDesktopSystemsImage() {
        return cy.get('#boombox');
    }

    getCopyright() {
        return cy.get('.col-lg-12');
    }

}

export default OurProducts;