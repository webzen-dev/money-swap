=======================================
Money Swap
=======================================

**Contents:**

.. contents:: :local:

Introduction
------------
This project is a cryptocurrency exchange platform implemented using the CoinMarketCap API. The platform displays a list of cryptocurrencies, and users can input two values: ``baseCurrency`` and ``targetCurrency``. These inputs allow users to see the exchange rate between two different cryptocurrencies. For example, they can find out that one Bitcoin is equivalent to 36 Ethereum units.

The project uses Redux Toolkit for state management, with the exchange rate logic implemented in a dedicated slice called ``CalculateSlice``. This slice includes the following functions:

- ``setBase``: Sets the base currency.
- ``setTarget``: Sets the target currency.
- ``calculate``: Calculates the exchange rate based on the latest cryptocurrency prices.

The project also includes the following features:

- Advanced type usage.
- Standard folder structure for large-scale projects.
- Custom hooks.
- API pagination to optimize data loading.
- Debouncing requests to enhance pagination performance.
- Data caching using Redux.
- Lazy loading due to the large number of API records.
- Error handling.
- Data virtualization to improve performance.
- Optimization with ``useMemo`` and ``useCallback``.

Technologies Used
-----------------
The following technologies and libraries are used in this project:

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A standardized way to write Redux logic, used for state management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A strongly-typed language that builds on JavaScript.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Toastify**: A library for displaying customizable toast notifications.
- **Framer Motion**: A library for creating animations.
- **Lodash**: A utility library that provides helper functions for JavaScript.
- **Dotenv**: For loading environment variables from a ``.env`` file.

These technologies enable efficient development, state management, performance optimization, and styling for the project.

APIs Used
---------
- **National Currency Exchange API:**  
  URL: ``https://v6.exchangerate-api.com/v6/f2fcb7698cabab7bc90268a8/latest/USD``  
  This API provides exchange rates for various national currencies, helping to display accurate conversion rates in fiat currencies.

- **CoinMarketCap Cryptocurrency Listings API:**  
  URL: ``https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest``  
  This API is used to fetch the latest list of cryptocurrencies along with their prices and market data. It is essential for the platform's functionality to calculate exchange rates between digital currencies.

How to Run the Project
----------------------
1. Clone the Project
~~~~~~~~~~~~~~~~~~~~~
Clone the repository from GitHub:

.. code-block:: bash

   git clone https://github.com/webzen-dev/money-swap.git

2. Install Dependencies
~~~~~~~~~~~~~~~~~~~~~~~~
Navigate to the project directory and install the required dependencies:

.. code-block:: bash

   cd money-swap
   npm install

**Note:** Since the project is built with TypeScript, ensure that TypeScript and its related dependencies are properly installed. If needed, run:

.. code-block:: bash

   npm install --save-dev typescript @types/react @types/node

3. Run the Project
~~~~~~~~~~~~~~~~~~~
3.1 Launch Chrome in Insecure Mode
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The APIs used in the project require running the browser in an insecure mode. Use the following commands to launch Chrome accordingly:

**For Windows:**

.. code-block:: powershell

   & "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\ChromeDev"

**For Linux:**

.. code-block:: bash

   google-chrome --disable-web-security --user-data-dir="/tmp/chrome_dev"

3.2 Start the Development Server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Once Chrome is running in insecure mode, start the project with:

.. code-block:: bash

   npm start

This command will run the project in development mode. Open your browser and navigate to http://localhost:3000 to view the application.
