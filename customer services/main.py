from functions import *
from tkinter import *
from PIL import ImageTk, Image

def send_message():
    user_message = user_input.get()

    # Process user_message and generate chatbot_response
    chatbot_response = get_response(user_message)
    chat_display.config(state="normal")
    chat_display.insert("end", "You: " + user_message + "\n")
    chat_display.insert("end", "Cryo: " + chatbot_response + "\n"*2)
    chat_display.config(state="disabled")
    user_input.delete(0, "end")

def on_enter(event):
    send_message()

root = Tk()
root.title("Customer Services")

# Create a Canvas widget and set its size to fill the root window
canvas = Canvas(root, width=800, height=500)
canvas.grid(row=0, column=0, sticky="nsew")

# Create a gradient background using create_rectangle method
gradient = Image.new("RGB", (root.winfo_screenwidth(), root.winfo_screenheight()), "#0a2445")
gradient = ImageTk.PhotoImage(gradient)
canvas.create_image(0, 0, anchor="nw", image=gradient)

chat_display = Text(root, width=85, height=40, font=("Arial", 10, "bold"))
chat_display.config(state="disabled")
chat_display.configure(foreground="white", background="#153052")  # Set the text color and background color

scrollbar = Scrollbar(root, command=chat_display.yview)
chat_display['yscrollcommand'] = scrollbar.set

user_input = Entry(root, bd=1, bg="white", width=100, font=("Arial", 10, "bold"))
user_input.focus()  # Set focus to the user_input Entry widget

send_button = Button(root, width=10, height=1, text="Send", command=send_message)
send_button.configure(background="#153052", foreground="white")

chat_display.grid(row=0, column=0, padx=10, pady=10, sticky="nsew")
scrollbar.grid(row=0, column=1, sticky="ns")
user_input.grid(row=1, column=0, padx=10, pady=10, sticky="ew")
send_button.grid(row=1, column=1, padx=2, pady=2)

root.bind('<Return>', on_enter)

root.mainloop()
