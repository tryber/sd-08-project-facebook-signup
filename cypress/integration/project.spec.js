const TOP_BAR_SELECTOR = '.top-bar';
const FACEBOOK_LOGOTIPO_SELECTOR = '.facebook-logo';
const FACEBOOK_LOGIN_FORM_SELECTOR = 'form.facebook-login';
const USER_IDENTIFIER_INPUT_SELECTOR = 'input#user-email-phone';
const USER_IDENTIFIER_LABEL_SELECTOR = '#user-email-phone-label';
const USER_PASSWORD_LABEL_SELECTOR = '#user-password-label';
const USER_IDENTIFIER_LABEL_TEXT_SELECTOR = 'Email ou telefone';
const USER_PASSWORD_LABEL_TEXT_SELECTOR = 'Senha';
const USER_PASSWORD_INPUT_SELECTOR = 'input#user-password';
const USER_LOGIN_BUTTON_SELECTOR = '#button-login';
const FACEBOOK_SLOGAN_SELECTOR = 'p#facebook-slogan';
const FACEBOOK_SLOGAN = 'O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.';
const FACEBOOK_NETWORKING_IMG_SELECTOR = 'img#facebook-networking';
const OPEN_ACCOUNT_MESSAGE = 'Abra uma conta';
const QUICK_AND_SIMPLE_MESSAGE = 'É rápido e fácil.';
const ALL_INPUT_SELECTOR = 'input';
const ALL_PASSWORD_INPUT_SELECTOR = 'input[type=password]';
const BIRTHDATE_TITLE = 'Data de nascimento';
const GENDER_TITLE = 'Gênero';
const GENRES = [
  'Feminino',
  'Masculino',
  'Personalizado'
];
const REGISTER_BUTTON_SELECTOR = 'button#facebook-register';

const checkPlaceholder = (elements, placeholder) => (
  elements.some((element) => Cypress.$(element).attr('placeholder') === placeholder)
);


const evaluateOffset = (doc, selector, offsetType) => {
  return doc.querySelector(selector).getBoundingClientRect()[`${offsetType}`];
};


const checkIsRightOf = (elementLeftSelector, elementRightSelector) => {
  cy.document().then(doc => {
    const elementLeft = {
      left: evaluateOffset(doc, elementLeftSelector, 'left'),
      width: evaluateOffset(doc, elementLeftSelector, 'width'),
    };

    const elementRight = {
      left: evaluateOffset(doc, elementRightSelector, 'left'),
    };

    expect(elementRight.left >= elementLeft.left + elementLeft.width).to.be.true;
  });
};

const checkIsBelowOf = (elementAboveSelector, elementBelowSelector) => {
  cy.document().then(doc => {
    const elementAbove = {
      top: evaluateOffset(doc, elementAboveSelector, 'top'),
      height: evaluateOffset(doc, elementAboveSelector, 'height'),
    };

    const elementBelow = {
      top: evaluateOffset(doc, elementBelowSelector, 'top'),
      height: evaluateOffset(doc, elementBelowSelector, 'height'),
    };

    expect(elementBelow.top >= elementAbove.top + elementAbove.height).to.be.true;
  });
};

describe('Facebook Signup', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });

  describe('Crie uma barra azul na parte superior da página com a classe top-bar', () => {
    it('Esta barra deve possuir a classe top-bar', () => {
      cy.get(TOP_BAR_SELECTOR).should('exist');
    });

    it('A classe top-bar deve determinar que o elemento é um flex container', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('A classe top-bar deve possuir a propriedade `background-color: rgb(66, 103, 178)`', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'background-color', 'rgb(66, 103, 178)');
    });
  });

  describe('A barra superior deve conter o logotipo do Facebook no canto esquerdo com a classe facebook-logo', () => {
    it('O logotipo deve estar alinhado a esquerda dentro da barra azul', () => {
      cy.get(FACEBOOK_LOGOTIPO_SELECTOR).should('be.leftAligned', '.top-bar');
    });

    it('Deve existir um elemento img com a classe facebook-logo', () => {
      cy.get(FACEBOOK_LOGOTIPO_SELECTOR).should('exist');
    });
    
    it('O atributo src do logotipo deve apontar para imgs/facebook-logo.png', () => {
      cy.get(FACEBOOK_LOGOTIPO_SELECTOR).should('have.attr', 'src').should('equal','imgs/facebook-logo.png')
    });
  });

  describe('A barra superior deve conter um formulário de autenticação no canto direito', () => {
    it('O formulário deve estar alinhado a direita dentro da barra azul', () => {
      cy.get(FACEBOOK_LOGIN_FORM_SELECTOR).should('be.rightAligned', '.top-bar');
    });

    it('Existe formulário possui uma classe chamada facebook-login', () => {
      cy.get(FACEBOOK_LOGIN_FORM_SELECTOR).should('exist');
    });

    it('O formulário deve ser um flex container', () => {
      cy.get(FACEBOOK_LOGIN_FORM_SELECTOR).should('have.css', 'display', 'flex');
    });
  });

  describe('Crie uma classe no CSS chamada form-group', () => {
    it('Essa classe deve possuir a propriedade `diplay: flex`', () => {
      cy.get('.form-group').should('have.css', 'display', 'flex');
    });

    it('Alinhe o eixo principal dessa classe para ser o eixo vertical', () => {
      cy.get('.form-group').should('have.css', 'flex-direction', 'column');
    });
  });

  describe('Adicione o primeiro subcontainer com a classe form-group para agrupar o rótulo e campo "E-mail ou telefone" dentro do formulário criado na etapa 3', () => {
    it('Deve haver um container utilizando a classe `form-group` criada no passo anterior', () => {
      cy.get('form.facebook-login').children().first()
        .should('exist')
        .should('have.class', 'form-group')
    });
  
    it('Dentro do container `form-group` criado, deve haver um rótulo com o id user-email-phone-label e o texto "Email ou telefone"', () => {
      cy.get(USER_IDENTIFIER_LABEL_SELECTOR).parent().should('have.class', 'form-group');

      cy.get(USER_IDENTIFIER_LABEL_SELECTOR)
        .should('exist')
        .should('have.text', USER_IDENTIFIER_LABEL_TEXT_SELECTOR);
    });

    it('Dentro do container `form-group` criado, abaixo do rótulo deve haver campo de entrada de texto para receber o email ou o telefone do usuário com o id user-email-phone', () => {
      cy.get(USER_IDENTIFIER_INPUT_SELECTOR).should('exist');
      
      cy.get(USER_IDENTIFIER_INPUT_SELECTOR).parent().should('have.class', 'form-group');

      checkIsBelowOf(USER_IDENTIFIER_LABEL_SELECTOR, USER_IDENTIFIER_INPUT_SELECTOR);
    });
  });

  describe('Adicione o segundo subcontainer com a classe form-group para agrupar o rótulo e campo "Senha" dentro do formulário criado na etapa 3', () => {
    it('Deve haver um novo container utilizando a classe `form-group` criada no passo 4', () => {
      cy.get("form.facebook-login > .form-group").eq(1).should('exist');
    });
  
    it('Dentro do novo container `form-group` criado, deve haver um rótulo com o id user-password-label e o texto "Senha"', () => {
      cy.get("form.facebook-login .form-group label#user-password-label")
        .should('exist')
        .should('have.text', USER_PASSWORD_LABEL_TEXT_SELECTOR);
    });

    it('Dentro do novo container `form-group` criado, abaixo do rótulo deve haver campo de entrada para senha com o id user-password', () => {
      cy.get("form.facebook-login .form-group input#user-password").should('exist');

      checkIsBelowOf(USER_PASSWORD_LABEL_SELECTOR, USER_PASSWORD_INPUT_SELECTOR);

    });
  });

  describe('Adicione o terceiro subcontainer com a classe form-control com o botão "Entrar" dentro do formulário criado na etapa 3', () => {
    it('Deve haver um novo container utilizando a classe `form-control` criada no passo anterior`', () => {
      cy.get("form.facebook-login > .form-control").eq(0).should('exist');
    });

    it('Crie uma classe no CSS form-control com a propriedade `align-self: flex-end`', () => {
      cy.get('.form-control').should('have.css', 'align-self', 'flex-end');
    });

    it('Dentro do novo container `form-control` criado, deve haver um botão com o id "button-login" e o texto "Entrar"', () => {
      cy.get("form.facebook-login .form-control #button-login")
        .should('exist')
        .should('have.text', 'Entrar');
    });

    it('O botão deve estar alinhado a direita do campo de entrada para senha', () => {
      checkIsRightOf(USER_PASSWORD_INPUT_SELECTOR, USER_LOGIN_BUTTON_SELECTOR);
    });

    it('Ao clicar no botão com o id #button-login deve exibir um alert com o valor do campo "Email ou telefone"', () => {
      const content = 'my-user';
      let alerted = false;
  
      cy.on('window:alert', (text) => {
        expect(text).to.equal(content);
        alerted = true;
      });

  
      cy.get(USER_IDENTIFIER_INPUT_SELECTOR).type(content);
      cy.get(USER_LOGIN_BUTTON_SELECTOR)
        .should('exist')
        .should('have.text', 'Entrar')
        .click().then(()=> {
          expect(alerted).to.eq(true);
        });
    });
  });

  describe("Crie um container com a classe main-content abaixo da barra azul para agrupar o conteúdo principal da página", () => {
    it('Crie um elemento com a classe main-content', () => {
      cy.get('.main-content').should('exist');
    });

    it('O elemento deve ser um flex container no eixo horizontal', () => {
      cy.get('.main-content')
        .should('have.css', 'display', 'flex')
        .should('have.css', 'flex-direction', 'row');
    });

    it('O elemento deve posicionado abaixo da barra azul', () => {
      checkIsBelowOf('.top-bar', '.main-content');
    });
  });

  describe("Crie um subcontainer com a classe left-content para colocar o conteúdo do lado esquerdo dentro do container com a classe main-content", () => {
    it('O subcontainer deve ter a classe left-content', () => {
      cy.get('.main-content > .left-content').should('exist');
    });

    it('A classe left-content deve ter uma largura de 800px', () => {
      cy.get('.main-content > .left-content').should('have.css', 'width', '800px');
    });

    it('Dentro do container com a classe left-content deve existir um parágrafo com id facebook-slogan e o texto "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida."', () => {
      cy.get('.main-content > .left-content #facebook-slogan')
        .should('exist')
        .contains(FACEBOOK_SLOGAN);
    });

    it('Dentro do container com a classe left-content deve existir abaixo do parágrafo com id facebook-slogan uma imagem com id facebook-networking e o src com o endereço `imgs/networking.png`.', () => {
      cy.get('.main-content > .left-content img#facebook-networking')
        .should('exist')
        .should('have.attr', 'src', 'imgs/networking.png');
        
      checkIsBelowOf(FACEBOOK_SLOGAN_SELECTOR, FACEBOOK_NETWORKING_IMG_SELECTOR);
    });
  });

  describe("Crie um subcontainer com a classe right-content para colocar o conteúdo do lado direito dentro do container com a classe main-content", () => {
    it('O novo subcontainer deve ter a classe right-content', () => {
      cy.get('.main-content > .right-content').should('exist');
    });

    it('A classe right-content deve ter uma largura de 300px', () => {
      cy.get('.main-content > .right-content').should('have.css', 'width', '300px');
    });

    it('Utilize na classe main-content a propriedade justify-content com o valor mais apropriado para alinhar os conteúdos', () => {
      cy.get('.main-content').should('have.css', 'justify-content');
    });

    it('Dentro do subcontainer com a classe right-content deve existir um elemento h1 com o texto "Abra uma conta"', () => {
      cy.get('.main-content > .right-content h1').contains(OPEN_ACCOUNT_MESSAGE);
    });

    it('Dentro do subcontainer com a classe right-content deve existir um elemento com a classe quick-easy com o texto "É rápido e fácil." posicionado abaixo do texto "Abra uma conta"', () => {
      cy.get('.main-content > .right-content .quick-easy')
        .should('exist')
        .contains(QUICK_AND_SIMPLE_MESSAGE);

      checkIsBelowOf('.main-content > .right-content h1', '.main-content > .right-content .quick-easy');
    });

    it('Dentro do subcontainer com a classe right-content deve existir um elemento form abaixo do texto "É rápido e fácil."', () => {
      cy.get('.main-content > .right-content form').should('exist');

      checkIsBelowOf('.main-content > .right-content .quick-easy', '.main-content > .right-content form');
    });

    it('O elemento com a classe right-content deve estar a direita do elemento com a classe left-content', () => {
      checkIsRightOf('.main-content > .left-content', '.main-content > .right-content');
    });
  });

  describe("Crie um campo de entrada de texto para o nome do usuário dentro do formulário criado no requisito 10", () => {
    it('O campo deve ter o atributo name com o valor "firstname"', () => {
      cy.get('.main-content form input[name="firstname"]').should('exist');    
    });

    it('O campo deve ter um placeholder com o valor "Nome"', () => {
      cy.get('.main-content form input[name="firstname"]').should('have.attr', 'placeholder', 'Nome');
    });
  });

  describe("Crie um campo de entrada de texto para o sobrenome do usuário dentro do formulário criado no requisito 10", () => {
    it('O campo deve ter o atributo name com o valor "lastname"', () => {
      cy.get('.main-content form input[name="lastname"]').should('exist');    
    });

    it('O campo deve ter um placeholder com o valor "Sobrenome"', () => {
      cy.get('.main-content form input[name="lastname"]').should('have.attr', 'placeholder', 'Sobrenome');
    });

    it('Esse campo deve estar alinhado a direita do campo de Nome', () => {
      checkIsRightOf('.main-content form input[name="firstname"]', '.main-content form input[name="lastname"]')
    });
  });

  describe("Crie um campo de entrada de texto para o celular ou email do usuário dentro do formulário criado no requisito 10", () => {
    it('O campo deve ter o atributo name com o valor "phone_email"', () => {
      cy.get('.main-content form input[name="phone_email"]').should('exist');    
    });

    it('O campo deve ter um placeholder com o valor "Celular ou email"', () => {
      cy.get('.main-content form input[name="phone_email"]').should('have.attr', 'placeholder', 'Celular ou email');
    });

    it('Posicione esse campo abaixo do campo do nome do usuário', () => {
      checkIsBelowOf('.main-content form input[name="firstname"]', '.main-content form input[name="phone_email"]')
    });
  });

  describe("Crie um campo de entrada para senha do usuário dentro do formulário criado no requisito 10", () => {
    it('O campo deve ter o atributo name com o valor "password"', () => {
      cy.get('.main-content form input[name="password"]').should('exist');    
    });

    it('O campo deve ser do tipo "password"', () => {
      cy.get('.main-content form input[name="password"]').should('have.attr', 'type', 'password');
    });

    it('O campo deve ter um placeholder com o valor "Nova senha"', () => {
      cy.get('.main-content form input[name="password"]').should('have.attr', 'placeholder', 'Nova senha');
    });

    it('Posicione esse campo abaixo do celular/email', () => {
      checkIsBelowOf('.main-content form input[name="phone_email"]', '.main-content form input[name="password"]')
    });
  });

  describe("Crie um campo de entrada para data de nascimento do usuário dentro do formulário criado no requisito 10", () => {
    it('Um rótulo abaixo do campo nova senha com o id label-birthdate e o texto "Data de nascimento" ', () => {
      cy.get('.main-content form label#label-birthdate').contains(BIRTHDATE_TITLE);
    });

    it('O campo deve ter o atributo name com o valor "birthdate"', () => {
      cy.get('.main-content form input[name="birthdate"]').should('exist');    
    });

    it('O campo deve ter um placeholder com o valor "dd/mm/aaaa"', () => {
      cy.get('.main-content form input[name="birthdate"]').should('have.attr', 'placeholder', 'dd/mm/aaaa');
    });

    it('Posicione esse campo abaixo do rótulo', () => {
      checkIsBelowOf('.main-content form label#label-birthdate', '.main-content form input[name="birthdate"]')
    });
  });

  describe("Crie um campo de entrada para gênero do usuário dentro do formulário criado no requisito 10", () => {
    it('Um rótulo abaixo do campo nova senha com o id label-gender e o texto "Gênero" ', () => {
      cy.get('.main-content form label#label-gender').contains(GENDER_TITLE);
    });

    it('O campo deve ser formado por três `radio buttons` com as opções "Feminino", "Masculino" e "Personalizado"', () => {
      cy.get("input[type='radio']")
        .should(($radios) => {
          expect($radios).to.have.length(GENRES.length);
          $radios.each((index, radio) => {
            expect(Cypress.$(radio).val()).to.equal(GENRES[index]);
          });
        });
    });

    it('Posicione os radio buttons para ficar na mesma linha', () => {
      const topOptions = []
      cy.get("input[type='radio']")
        .should(($radios) => {
          $radios.each((index, radio) => {
            topOptions.push(radio.getBoundingClientRect()[`top`]);
          });

          expect([...new Set(topOptions)].length).to.equal(1);
        });
    });

    it('Posicione os radio buttons para ficar abaixo do label', () => {
      cy.document().then(doc => {
        const topOptions = []
        let topLabel = evaluateOffset(doc, '.main-content form label#label-gender', 'top');
        let heightLabel = evaluateOffset(doc, '.main-content form label#label-gender', 'height');
      
        cy.get("input[type='radio']")
          .should(($radios) => {
            $radios.each((index, radio) => {
              topOptions.push(radio.getBoundingClientRect()[`top`]);
            });

            expect([...new Set(topOptions)][0] > (topLabel + heightLabel)).to.equal(true);
          });
        }); 
    });
  });
  
  describe("Crie um botão para finalizar o cadastro dentro do formulário criado no requisito 10", () => {
    it('Um botão com o texto "Cadastre-se" e id "facebook-register"', () => {
      cy.get(REGISTER_BUTTON_SELECTOR)
        .should('exist')
        .should('have.text', 'Cadastre-se');
    });

    it('Deve ter a propriedade type igual a submit', () => {
      cy.get(REGISTER_BUTTON_SELECTOR).should('have.attr', 'type').should('equal','submit')
    });
  });

  describe('Validar se todos os campos foram preenchidos ao clicar no botão "Cadastre-se"', () => {
    it('Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido', () => {
      cy.get('input[name="firstname"]').type("John");
      cy.get('input[name="lastname"]').type("Doe");
      cy.get(REGISTER_BUTTON_SELECTOR).click();

      cy.get('.main-content form').contains('Campos inválidos');
    });    
  });

  describe('Adicione um novo campo de texto no formulário se a pessoa usuária selecionar a opção "Personalizado" no campo Gênero', () => {
    const firstname = 'John';
    const lastname = 'Doe';
    const phoneEmail = 'johndoe@trybe.com';
    const birthdate = '01/01/1990';
    const password = 'changeme';
  
    function fillForm() {
      cy.visit('./index.html');

      cy.get('input[name="firstname"]').type(firstname);
      cy.get('input[name="lastname"]').type(lastname);
      cy.get('input[name="phone_email"]').type(phoneEmail);
      cy.get('input[name="password"]').type(password);
      cy.get('input[name="birthdate"]').type(birthdate);
    }

    beforeEach(() => {
      cy.visit('./index.html');
      cy.get('input[name="gender"]').check('Personalizado');
    });

    it('O novo campo dever ser uma campo de texto com o atributo name "gender-custom" e um placeholder "Gênero (opcional)"', () => {
      cy.get('input[name="gender-custom"]').should('exist');
    });    

    it('O novo campo deve estar posicionado entre as opções de gênero e o botão "Cadastrar-se"', () => {
      checkIsBelowOf('input[name="gender"]', 'input[name="gender-custom"]');

      checkIsBelowOf('input[name="gender-custom"]', REGISTER_BUTTON_SELECTOR);
    });
  });

  describe('Substituir o conteúdo do container com a classe right-content se o formulário estiver completamente preenchido e validado', () => {
    const firstname = 'John';
    const lastname = 'Doe';
    const phoneEmail = 'johndoe@trybe.com';
    const password = 'changeme';
    const birthdate = '01/01/1990';
  
    function fillForm() {
      cy.visit('./index.html');

      cy.get('input[name="firstname"]').type(firstname);
      cy.get('input[name="lastname"]').type(lastname);
      cy.get('input[name="phone_email"]').type(phoneEmail);
      cy.get('input[name="password"]').type(phoneEmail);
      cy.get('input[name="birthdate"]').type(birthdate);
      cy.get('input[name="gender"]').check('Feminino')
    }

    beforeEach(() => {
      fillForm();
      cy.get(REGISTER_BUTTON_SELECTOR).click();
    });

    it('Deve haver um texto no modelo "Olá, Jonh Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)', () => {
      cy.get('.main-content .right-content')
        .contains(`Olá, ${firstname} ${lastname}`)
    });

    it('Exibir o e-mail ou telefone', () => {
      cy.get('.main-content .right-content')
        .contains(phoneEmail);
    });

    it('Não exibir a senha', () => {
      cy.get('.main-content .right-content').should('not.contain', password);
    });

    it('Exibir a data de nascimento', () => {
      cy.get('.main-content .right-content').contains(birthdate);
    });

    it('Caso a opção selecionada no campo Gênero seja Feminino exibir "Feminino"', () => {
      fillForm();
      cy.get('input[name="gender"]').check('Feminino')
      cy.get(REGISTER_BUTTON_SELECTOR).click();

      cy.get('.main-content .right-content').contains('Feminino');
    });

    it('Caso a opção selecionada no campo Gênero seja Masculino exibir "Masculino"', () => {
      fillForm();
      cy.get('input[name="gender"]').check('Masculino')
      cy.get(REGISTER_BUTTON_SELECTOR).click();

      cy.get('.main-content .right-content').contains('Masculino');
    });

    it('Caso a opção selecionada no campo Gênero seja Personalizado exibir "Personalizado"', () => {
      fillForm();
      cy.get('input[name="gender"]').check('Personalizado')
      cy.get(REGISTER_BUTTON_SELECTOR).click();

      cy.get('.main-content .right-content').contains('Personalizado');
    });
  });
});
