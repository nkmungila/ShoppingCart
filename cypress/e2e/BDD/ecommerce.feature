Feature: End to End Ecommerce Validation

    application Regression

    Scenario: Ecommerce Product Delivery
    Given I open Ecommerce page
    When I add item to Cart
    And validate the total prices
    Then select the country submit and verify Thankyou