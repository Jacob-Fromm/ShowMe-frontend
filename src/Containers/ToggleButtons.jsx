import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab"
import {FormatBoldIcon} from "@material-ui/icons"


function ToggleButtons(){
    return(
        <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
            <ToggleButton value="comedian" aria-label="comedian">
               
            </ToggleButton>
            <ToggleButton value="fan" aria-label="fan">
                
            </ToggleButton>
            <ToggleButton value="producer" aria-label="producer">
               
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
                
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleButtons
    