import Button from '../belajar/storyBook/Button'

export default {
    title: "Coba/Button2",
    component: Button,
    argTypes: { onClick: {action: "Coba pencet"}}
}

const Template = args => <Button {...args}/>

export const Coba = Template.bind({})
Coba.args = {
    backgroundColor: "red",
    label: "Percobaan 1",
    size: "md"
}

export const Hijau = Template.bind({})
Hijau.args = {
    backgroundColor: "green",
    label: "Percobaan 1",
    size: "md"
}

export const Besar = Template.bind({})
Besar.args = {
    backgroundColor: "red",
    label: "Percobaan 1",
    size: "lg"
}

export const Panjang = Template.bind({})
Panjang.args = {
    backgroundColor: "red",
    label: "Panjang sekali bosque",
    size: "md"
}