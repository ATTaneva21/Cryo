import random

# These are the chat bot responses

R_GREETINGS = "Hello! How can I help you?"
R_GRATITUDE = "You are welcome! If you have more questions, I am here to help."
R_TRANSACTIONS = "\nIn order to see the transactions that you have made: you can click on the blue button \"see more\" under the Transactions section at the home page."
R_SEND_MONEY = "\nIn order to send money to a person you have to: \n1.Go to the home page. \n2.Click on the button send which is located next to your current balance.That will send you to a page with a form. \n3.After you fill out the form you need to click on the buttons send located in the bottom right corner."
R_PROFILE_CHANGES = "\nTo change your anything from your profile: \nClick on your profile picture and then edit profile"
R_CHANGE_PASSWORD = "\nIn order to change your password you have to: \n1.Click on your profile icon. \n2.There in the top right corner is the button Edit. \n3.From there you can change you password."
R_BEQUEATH_SOMETHING = "\nIn order to bequeath the possesion you want you have to: \n1.From the home page in the box Digital will click on the button see more. This will lead you to the list of your bequeathed goods and properties. \n2.Then click on the thing you want to leave to somebody. \n3.There you will see a box that says Bequethed to there you have to write the name of the person you want to leave the thing to."
R_ADD_TO_WILL ="\nIn order to add a possesion to your digital will you have to: \n1.From the home page in the box Digital will click on the button see more. This will lead you to the list of your bequeathed goods and properties. \n2.To add something to your digital will you have to click the button Add at the bottom right corner. This will lead you to a form, which you have to fill out. \n3.When you fill it out you have to click the button Add at the bottom right corner."
R_QUESTION = "What is your question?"

# Returns one of these three responses when the user's input can't be understood by the chat bot
def unknown():
    response = ["Could you please re-phrase that? ",
                "I couldn't understand your question. Could you re-phrase it? ",
                "What does that mean?"][
        random.randrange(3)]
    return response
