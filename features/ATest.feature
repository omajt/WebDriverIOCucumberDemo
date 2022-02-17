@Regression1
Feature: Test 
@Scenario3  
Scenario:TC-003 Add product to Online Cart and checkout
        Given I am on the home page
        Given I am on the Sign In Page
        When Login using newly created credentials
        When I add below products to cart
            | category | subCategory    | name                        | model  | quantity |
            | Dresses  | Casual Dresses | Printed Dress               | demo_3 | 2        |
            | Women    | Tops           | Faded Short Sleeve T-shirts | demo_1 | 3        |
        # Then I shall validate shopping cart as below
        #     | name                        | model        | quantity |
        #     | Printed Dress               | SKU : demo_3 | 2        |
        #     | Faded Short Sleeve T-shirts | SKU : demo_1 | 3        |
