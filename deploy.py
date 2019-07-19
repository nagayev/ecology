from os import system
def main():
    system('npm run build')
    system('git add ./')
    message = input('Enter commit message: ')
    system('git commit -m '+message)
    system('git push -u origin master')
if __name__ == "__main__":
    main()