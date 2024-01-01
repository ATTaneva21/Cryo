import re
import long_responses as long
import lists_of_words as lists

def message_probability(user_message,recognised_words,single_response = False,required_words=[]):
    message_certainty = 0
    has_required_words = True

    for word in user_message:
        if word in recognised_words:
            message_certainty += 1

    percentage = float(message_certainty) / float(len(recognised_words))

    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:
        return int(percentage * 100)
    else:
        return 0


def check_all_messages(message):
    highest_prob_list = {}

    # Simplifies response creation / adds it to the dict
    def response(bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob_list
        highest_prob_list[bot_response] = message_probability(message, list_of_words, single_response, required_words)

    # Responses -------------------------------------------------------------------------------------------------------
    response(long.R_GREETINGS, lists.L_GREETINGS, single_response=True)
    response('Goodbye! Have a nice day', ['bye', 'goodbye', 'nice', 'day'], single_response=True)
    response(long.R_GRATITUDE, lists.L_GRATITUDE, single_response=True)
    response(long.R_TRANSACTIONS, lists.L_TRANSACTIONS, required_words=['transactions'])
    response(long.R_SEND_MONEY, lists.L_SEND_MONEY,required_words=['send', 'money'])
    response(long.R_CHANGE_PASSWORD, lists.L_CHANGE_PASSWORD, required_words=['change', 'password'])
    response(long.R_BEQUEATH_SOMETHING, lists.L_BEQUEATH_SOMETHING, required_words=['leave'])
    response(long.R_PROFILE_CHANGES,lists.L_PROFILE_CHANGES, required_words=['change'])
    response(long.R_ADD_TO_WILL, lists.L_ADD_TO_WILL, required_words=['add', 'digital', 'will'])
    response(long.R_QUESTION, lists.L_QUESTION, required_words=['question'])

    best_match = max(highest_prob_list, key=highest_prob_list.get)

    return long.unknown() if highest_prob_list[best_match] < 1 else best_match

def get_response(user_input):
    split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())
    response = check_all_messages(split_message)
    return response

while True:
    print('Bot: ' + get_response(input('You: ')))