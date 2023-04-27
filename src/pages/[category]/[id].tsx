import { GetServerSideProps } from 'next'

export default function Page(props: PageProps) {
  return <>{props.query.page}</>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  }
}
