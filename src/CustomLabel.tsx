    
interface CustomLabelProps {
    label: string
}
    
export const CustomLabel = (props: CustomLabelProps): JSX.Element => {
    return <div className="flex flex-row gap-3 justify-between border-blue-300">
        <label>{props.label}</label>
        <input />
    </div>
} 