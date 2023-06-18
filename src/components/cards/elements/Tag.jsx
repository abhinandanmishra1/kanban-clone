export const Tag = ({tag}) => {
    const tagClassNames = {
        'Low': 'bg-yellow-300 text-yellow-200',
        'Medium': 'bg-blue-100 text-blue-300',
        'High': 'bg-red-100 text-red-200',
        'Completed': 'bg-green-100 text-green-200',
    }
    
    return <div className={`rounded-[4px] py-[4px] px-[6px] inline-block ${tagClassNames[tag]}`}>
        {tag}
    </div>
}