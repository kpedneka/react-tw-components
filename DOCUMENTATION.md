# Documentation

## Component List

| Component | Props     | Valid parent component |
| --------- | --------- | ------------ |
| ```Appbar```  | ```title: string```, ```icon: Icon```, ```onClick: func``` | Your application's root element |
| ```Body```  | ```children: [node]``` | Your application's root element |
| ```Sidebar```  | ```title: string```, ```icon: Icon```, ```state: bool```, ```onClose: func```, ```children: [node]``` | Your application's root element |
| ```SidebarItem```  | ```title: string```, ```icon: Icon```, ```children: [node]``` | ```Sidebar``` |
| ```SidebarSubitem```  | ```title: string``` | ```SidebarItem``` |

#### Note
* The ```onClick```, ```onClose```, and ```state``` props in ```Appbar``` and ```Sidebar``` are dependent on each other. See [react-tw-components/example/src/App.js](https://github.com/kpedneka/react-tw-components/blob/main/example/src/App.js) for more information on how to accomplish this.