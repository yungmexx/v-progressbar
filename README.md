
# Progressbar


# Usage

> ```lua
>    exports['progressbar']:Progress({
>  
>        name = "Change Me",
>        duration = 5000,
>        label = "This is what the player sees",
>        useWhileDead = false,
>        canCancel = true,
>        controlDisables = {
>            disableMovement = false,
>            disableCarMovement = false,
>            disableMouse = false,
>            disableCombat = true,
>        },
>        animation = {
>            animDict = "missheistdockssetup1clipboard@base",
>            anim = "base",
>            flags = 49,
>        },
>        prop = {
>          model = 'prop_notepad_01',
>          bone = 18905,
>          coords = vec3(0.1, 0.02, 0.05),
>          rotation = vec3(10.0, 0.0, 0.0),
>        },
>        propTwo = {
>          model = 'prop_pencil_01',
>          bone = 58866,
>          coords = vec3(0.11, -0.02, 0.001),
>          rotation = vec3(-120.0, 0.0, 0.0),
>        }
>     }, function(cancelled)
>        if not cancelled then
>            -- finished
>        else
>            -- cancelled
>        end
>     end)
> ```

- isDoingSomething()
> Returns a boolean (true/false) depending on if a progressbar is present.<br>
> **Example:**
> ```lua
> local busy = exports["progressbar"]:isDoingSomething()
> ```
