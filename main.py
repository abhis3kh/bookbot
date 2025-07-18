from stats import number_of_words_in
from stats import count_occurance_of_letters_in_string 
from stats import decorate_dict
import sys
# Function to return the content of a file
def get_book_text(file_path):
    content_of_file=""
    with open(file_path, "r") as file:
        content_of_file=file.read()
    return content_of_file

#Main function
def main():
    #relative path of the file
    if len(sys.argv)>1:
        relative_path=sys.argv[1]
        content_of_the_book= get_book_text(relative_path)
        number_of_words_in_the_book=number_of_words_in(content_of_the_book)
        print("============ BOOKBOT ============")
        print(f"Analyzing book found at {relative_path}...")
        print("----------- Word Count ----------")
        print(f"Found {number_of_words_in_the_book} total words")
        tracker,count = count_occurance_of_letters_in_string(content_of_the_book)
        print("--------- Character Count -------")
        decorate_dict(tracker)
    else:
        print("Usage: python3 main.py <path_to_book>")
        sys.exit(1)
main() #FUCKING CALL IT
