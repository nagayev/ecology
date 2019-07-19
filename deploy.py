from os import system
def main():
    message = input('Enter commit message: ')
    system('git add ./')
    system('git commit -m '+message)
    system('npm run build && git push -u origin master')
if __name__ == "__main__":
    main()