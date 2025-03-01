export default function({ textarea , label, ...props }) {
    return (
        <p>
            <label>{label}</label>
            {textarea ? <textarea {...props} /> : <input {...props} />}
        </p>
    )
}