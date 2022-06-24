# Documentation

## Component List

| Component | Props     | Valid parent component |
| --------- | --------- | ------------ |
| ```Appbar```  | ```title: string```, ```icon: Icon```, ```onClick: func``` | ```ThemeProvider``` |
|```baseTheme``` | None | N/a. This is the default theme that is supplied by the package |
| ```Body```  | ```children: [node]``` | ```ThemeProvider``` |
|```Button``` | ```text: string```, ```icon: Icon```, ```link: string```, ```onClick: func``` |  |
|```ClickField``` | ```type: string```, ```name: string```, ```id: string```, ```value: string``` |  |
| ```Sidebar```  | ```title: string```, ```icon: Icon```, ```state: bool```, ```onClose: func```, ```children: [node]``` | ```ThemeProvider``` |
| ```SidebarItem```  | ```title: string```, ```icon: Icon```, ```children: [node]``` | ```Sidebar``` |
| ```SidebarSubitem``` | ```title: string``` | ```SidebarItem``` |
|```TextField``` | ```type: string```, ```name: string```, ```id: string```, ```placeholder: string``` |  |
| ```ThemeProvider``` | None | This should be the root element of your application |
|```ThemeContext``` | None | N/a. This a React.Context object that can be used in your application's components |


#### Note
* The ```onClick```, ```onClose```, and ```state``` props in ```Appbar``` and ```Sidebar``` are dependent on each other. See [react-tw-components/example/src/App.js](https://github.com/kpedneka/react-tw-components/blob/main/example/src/App.js) for more information on how to accomplish this.
* If you would like to style components defined in your own application, but would like the CSS colors to match what is provided by react-tw-components, you should use the ThemeContext context in your component and grab the theme from there.