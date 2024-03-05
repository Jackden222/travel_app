import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_dark_green'
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <Button 
        type={type}
    >
        { icon && <Image src={icon} alt={title} width={24} height={24}/>}
    </Button>
  )
}

export default Button