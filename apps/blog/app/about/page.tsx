import { twMerge } from "tailwind-merge";
import { Metadata, ResolvingMetadata, } from 'next'


type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
	const title = `소프트웨어 개발자 정준영 프로필`;
	const previousImages = (await parent).openGraph?.images || []
	const description = '소프트웨어 개발자 정준영의 프로필입니다.';
  
  return {
    title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			type: 'profile',
      firstName: '준영',
      lastName: '정',
      username: 'junzero741',
			images: [...previousImages],
		}
  }
}

export default async function About() {

  return (
    <div>
      <h3 className={'mb-4'}>
        코드를 작성하고, 지우는 일을 합니다.
        <br />
        창작자 만세
        </h3>
      <ul className="flex flex-col gap-1 list-inside">
        <li>
         소속: <OuterLink href="https://www.berapt.com/" target={"_blank"}>BeRapt</OuterLink>
        </li>
        <li className={''}>
          작업물들
            <ul className="list-inside pl-4">
              <li>그림 커뮤니티: <OuterLink href="https://pick.shoulder.fan/" target={"_blank"}>숄더픽</OuterLink></li>
              <li>작가 응원 커뮤니티: <OuterLink href="https://shoulder.fan/" target={"_blank"}>숄더</OuterLink></li>
            </ul>
        </li>
        <li>
         깃허브: <OuterLink href="https://github.com/junzero741" target={'_blank'}>GitHub</OuterLink>
        </li>
        <li>
         연락처: junzero741@gmail.com
        </li>
      </ul>
    </div>
  )
}

function OuterLink (props: JSX.IntrinsicElements['a']) {
  const {className, children, ...rest} = props; 

  return (
    <a className={twMerge("underline", className)} {...rest}>{children}</a>
  )
}