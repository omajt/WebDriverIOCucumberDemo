@Regression
Feature: SignUp, Sign In and Purchase Product
    @Scenario1
    Scenario: TC-001 Create New User SignUp
        Given I am on the home page
        Then Navigate to SignUp page
        #Then create an account with "omarmajt122@hotmail.com" randon username
        Then create an account with random username
    @Scenario2
    Scenario: TC-02 Sign In with newly created user credentials
        Given I am on the Sign In Page
        When Login using newly created credentials
        Then I shall verify the address information in my addresses section

    @Scenario3
    Scenario:TC-003 Add product to Online Cart and checkout
        Given I am on the home page
        Given I am on the Sign In Page
        When Login using newly created credentials
        When I add below products to cart
            | category | subCategory    | name                        | model  | quantity |
            | Dresses  | Casual Dresses | Printed Dress               | demo_3 | 2        |
            | Women    | Tops           | Faded Short Sleeve T-shirts | demo_1 | 3        |
        Then I shall validate shopping cart as below
            | name                        | model        | quantity |
            | Printed Dress               | SKU : demo_3 | 2        |
            | Faded Short Sleeve T-shirts | SKU : demo_1 | 3        |
