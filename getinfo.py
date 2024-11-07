from bs4 import BeautifulSoup

# Read the HTML file
with open('test.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Find all <li> elements
li_elements = soup.find_all('li')

# Extract and save text content to a text file
with open('output.txt', 'w', encoding='utf-8') as output_file:
    for li in li_elements:
        text_content = li.get_text(strip=True)
        text_content = ', '.join([elem.strip() for elem in text_content.split('\n') if elem.strip()])
        output_file.write(text_content + '\n')