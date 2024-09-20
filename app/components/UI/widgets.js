import { User, ShoppingCart } from "iconsax-react"
import Link from "next/link"


export const CartButton = ({children}) => {

    return(
        <section className='flex gap-1 items-center'>
            <ShoppingCart size="30" color="var(--accent-light)" variant="Bold" />
            {children}
        </section>
    )
}

export const AuthButton = () => {
    return (
        <section className='flex gap-2 items-center'>
            <User size="30" color="var(--accent-light)" variant="Bold" />
            <div className='flex flex-col text-[11px] leading-3'>
                <span>Hola,</span>
                <Link href='/login' className='font-bold'>Inicia sesión o registrate</Link>
            </div>
        </section>
    )
}