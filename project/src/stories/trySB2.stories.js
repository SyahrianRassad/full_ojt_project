import Stack from '../belajar/storyBook/Stack'

export default {
    title: "Coba/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4},
    }
}

const Template = ({numberOfChildren, ...args}) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n =>(
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "blue",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {n + 1}
            </div>
        ))}
    </Stack>
)
export const Coba = Template.bind({})
Coba.args = {
    spacing: 2,
    wrap: true,
    direction: "row"
}

export const Vertical = Template.bind({})
Vertical.args = {
    spacing: 2,
    wrap: false,
    direction: "column"
}

export const Horizontal = Template.bind({})
Horizontal.args = {
    spacing: 2,
    wrap: false,
    direction: "row"
}

export const noSpace = Template.bind({})
noSpace.args = {
    spacing: 0,
    wrap: true,
    direction: "row"
}

export const Warp = Template.bind({})
Warp.args = {
    numberOfChildren: 40,
    spacing: 2,
    wrap: true,
    direction: "row"
}