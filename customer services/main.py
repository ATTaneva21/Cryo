from functions import *
from tkinter import *
from PIL import ImageTk, Image


def send_message():
    user_message = user_input.get()

    # Process user_message and generate chatbot_response
    chatbot_response = get_response(user_message)
    chat_display.config(state="normal")
    chat_display.insert("end", "You: " + user_message + "\n")
    chat_display.insert("end", "Cryo customer services: " + chatbot_response + "\n"*2)
    chat_display.config(state="disabled")
    user_input.delete(0, "end")


root = Tk()
root.title("Customer Services")


chat_display = Text(root, bd=1, width=85, height=40, font=("Arial", 10, "bold"))
chat_display.config(state="disabled")

scrollbar = Scrollbar(root, command=chat_display.yview)
chat_display['yscrollcommand'] = scrollbar.set

user_input = Entry(root, bd=1, bg="white", width=100,font=("Arial", 10, "bold"))

send_button = Button(root, width=10, height=1, text="Send", command=send_message)

chat_display.grid(row=0, column=0, padx=10, pady=10)
scrollbar.grid(row=0, column=1, sticky="ns")
user_input.grid(row=1, column=0, padx=10, pady=10)
send_button.grid(row=1, column=1, padx=2, pady=2)

root.mainloop()
