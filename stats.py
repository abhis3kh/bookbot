#print number of words in a string of textbook
def number_of_words_in(book_string):
    splitted_words_from_book = book_string.split() #separate each word using spaces in between
    number_of_words=len(splitted_words_from_book)
    return number_of_words

def count_occurance_of_letters_in_string(text):
    splitted_words=text.split()
    tracker={}
    for word in splitted_words:
        word=word.lower()
        for letter in word:
            if(tracker.get(letter,False)):
                tracker[letter]=tracker[letter] + 1
            else:
                tracker[letter]=1
    return tracker,len(splitted_words)

def decorate_dict(char_freq):
    sorted_items = sorted(char_freq.items(),key=lambda item: (-item[1], item[0]))
    refined_dict=[{"name": k, "value": v} for k, v in sorted_items]
    for item in refined_dict:
        print(item["name"]+": "+str(item["value"]))
    print("============= END ===============")
