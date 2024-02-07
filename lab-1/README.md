# Observed programming principles:

### 1. DRY - Don't Repeat Yourself:

Example: Reusing code to avoid redundancy

Constructor and other common methods:
>class DocumentType { }

Methods specific to Identity document
>class Identity extends DocumentType { }

Methods specific to DriverLicense document
>class DriverLicense extends DocumentType { }

Methods specific to StudentID document
>class StudentID extends DocumentType { }


### 2. KISS - Keep It Simple, Stupid
 
Example: Simplifying code for better readability and maintenance

>class App {
> 
>>run() {
>>
>>}
>
>>    initializeOrderButtons(documentsContainer: Container) {
>>
>>    }
> 
>}

### 3. SOLID
**S - Single Responsibility Principle (SRP)**

Example: Separating concerns for better maintainability

>class App {
}

>class DocumentType {
}

>class Container {
}

>class MainPage {
}

**O - Open/Closed Principle (OCP)**

Example: Designing classes to be easily extendable without modification

>class DocumentType {
}

**L - Liskov Substitution Principle (LSP)**

Example: Ensuring subclasses can be substituted for their base classes

>class Identity extends DocumentType {
}

>class DriverLicense extends DocumentType {
}

>class StudentID extends DocumentType {
}

**I - Interface Segregation Principle (ISP)**

Example: Defining specific interfaces for specific use cases

>interface AllDocuments {
}

### 4. YAGNI - You Aren't Gonna Need It

Example: Avoiding over-engineering by implementing only what is necessary

Implementation without unnecessary features:
>class App {
}

>class DocumentType {
}

>class Container {
}

### 5. Fail Fast

Example: Detecting and reporting errors as soon as they occur to prevent further issues

>if (!order || !orderButton) {
> 
>>throw new Error('Required elements not found');
> 
>}
