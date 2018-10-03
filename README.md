# Glabs Project Shell v5: Hero Image Version

This is the Base shell for all Applications used in the Glabs Team.


Installations Instructions:
```
clone Repo
npm install
npm start

```
How To Use:

> To Amend Copy:

Folder >  public/json/data.json
This Json file contains all of the project copy and meta data that is not directly associated with the projects application. 
Here you can makes changes to:
Header Copy and Image
Body Copy
Sponsored/Client Metadata
Guardian Partner Zone details
Social Media Settings

NB: NO copy should be hard coded into the template, All copy should be added via the json file, and manipulated via js

Positioning Copy:
> Component “js/dom/Outshell.js”
The component “BodyCopy” found in this file is responsible for the formatting of content.
This component takes two attributes:

Copy=”” : This attr slices the bodycopy object from the Data.json file.



```
<BodyCopy   
               Copy={this.props.UI.Data.BodyCopy.slice(0, 3)}
           />

```

position=”” : This simply adds a class to the outer div for styling. For example

```
<BodyCopy   
                 Copy={this.props.UI.Data.BodyCopy.slice(3, 4)}
                 position="below"
             />

```
Will place a class of “below” on the containing Div under the application



Build Production:
### npm run build to create production version.


