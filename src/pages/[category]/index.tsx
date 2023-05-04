import { GetServerSideProps } from 'next'

export default function CategoryPage(props: PageProps) {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  }
}
