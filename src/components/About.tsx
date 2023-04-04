import Image from 'next/image'
import Link from 'next/link'

interface AboutProps 
{
    children?: React.ReactNode;
    Name: string;
    Role: string;
    ImagePath: string;
    Description: string;
    imageSize: number;
    GithubIds: string;
}


const About = ({children,Name,Role,ImagePath,Description,imageSize, GithubIds}:AboutProps) => {
    return (
    <div className='flex flex-col justify-center gap-3 md:gap-5 w-40' >
              <span><Image src={`${ImagePath}`} alt='Person' width={400} height={400} className={`h-${imageSize} justify-center object-contain hover:object-cover`} />
              <h3 className='text-black text-center text-xl font-medium'>{Name}</h3>
              <p className='flex text-black text-center text-sm font-medium flex-wrap justify-center'> <strong>{Role}</strong> <br/> {Description} <br/>
              <Link className='font-medium underline underline-offset-2' href={'https://Github.com/'.concat(GithubIds.toString())}> {GithubIds}</Link>
              </p>
              </span>
              {children}
            </div>
    )

}

export default About;