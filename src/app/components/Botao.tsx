interface Botaoprops {
    children: any
    cor?: 'green' | 'blue' | 'gray'
    className?: string
}

export default function Botao (props: Botaoprops) {

    const cor = props.cor ?? 'gray'
    return(
        <button className={`
        bg-gradient-to-r from-${cor}-300 to-${cor}-700
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}
