# AI Study Assistant

AI Study Assistant is a web application built to help students turn notes, documents, and lecture videos into useful study material.

The application accepts notes in multiple formats, extracts the content, and uses Google's Gemini API to generate summaries, explanations, quizzes, key points, and viva questions.

## Features

* Paste notes directly into the application
* Upload TXT, PDF, and DOCX files
* Analyze YouTube lectures with available transcripts
* Generate concise summaries
* Explain concepts in simple language
* Extract important key points
* Generate quizzes for self-assessment
* Create viva and interview questions

## Supported Inputs

* Text Notes
* TXT Files
* PDF Files
* DOCX Files
* YouTube Videos (with transcripts)

## Technologies Used

* Python
* Flask
* HTML
* CSS
* JavaScript
* Google Gemini API
* PyPDF
* python-docx
* youtube-transcript-api

## Project Structure

```text
app.py                 # Flask application
ai_helper.py           # Gemini API integration
content_extractor.py   # File and YouTube content extraction

templates/
    index.html

static/
    style.css
    script.js
```

## How It Works

1. User provides notes, uploads a document, or enters a YouTube link.
2. The application extracts the text content.
3. A task-specific prompt is generated.
4. Gemini processes the content.
5. The response is displayed in a structured format.

## Running the Project

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

## Future Improvements

* Flashcard generation
* Study plan creation
* Export results to PDF
* Advanced lecture analysis
* Multi-language support

## Author

Gunjan Sahijani
