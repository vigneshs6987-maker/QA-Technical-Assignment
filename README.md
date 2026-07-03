# Tichi App – QA Intern Technical Assignment

## Overview

This repository contains my submission for the Tichi QA Intern Technical Assignment. It includes:

- Manual Test Case Design
- Defect Reporting
- Playwright Automation Testing

The assignment focuses on the Login and Signup modules of the application.

---

## Application Under Test

**URL:** https://tichi-app-webapp-stage.web.app

---

## Objective

Evaluate the application's Login and Signup functionality through:

- Test Case Design
- Defect Reporting
- Automation Testing (Playwright)

---

## Repository Structure

```
QA-Technical-Assignment/
│
├── Test-Cases/
│   └── Test_Case_Document.xlsx
│
├── Defect-Reports/
│   └── Defect_Report.pdf
│
├── Automation/
│   ├── src/
│   ├── tests/
│   ├── reports/
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## Task 1 – Test Case Design

Prepared comprehensive test cases covering:

- Valid Login
- Invalid Login
- Valid Signup
- Invalid Signup
- Mandatory Field Validation
- Email Format Validation
- Password Validation
- Duplicate Account Validation
- Navigation Testing
- UI Validation

**Document:**

`Test_Case_Document.xlsx`

---

## Task 2 – Defect Report

Reported the following defect:

**Issue:**
Application allows users to log in using an invalid email format.

The report contains:

- Defect ID
- Description
- Preconditions
- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Evidence (Screenshots)

**Document:**

`Defect_Report.pdf`

---

## Task 3 – Automation Testing

Automated Login functionality using **Playwright with JavaScript**.

### Covered Scenarios

- Valid Login
- Invalid Login
- Empty Email
- Empty Password
- Invalid Credentials
- Boundary Test Cases

---

## Tech Stack

- Manual Testing
- Playwright
- JavaScript
- Node.js
- Git & GitHub

---

## How to Run Automation

```bash
npm install
npx playwright install
npx playwright test
```

Generate HTML Report:

```bash
npx playwright show-report
```

---

## Submission

This repository was completed and submitted as part of the **Tichi QA Intern Technical Assignment**.

---

## Author

**Vignesh S**

Email: vigneshs6987@gmail.com
