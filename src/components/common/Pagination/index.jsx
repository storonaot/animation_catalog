import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.sss'

type Props = {
  pageCount: number,
  initialPage: number | string,
  onPageChange: Function,
  marginPagesDisplayed?: number,
  pageRangeDisplayed?: number
}

const Pagination = ({
  pageCount,
  initialPage,
  onPageChange,
  marginPagesDisplayed,
  pageRangeDisplayed
}: Props) => (
  <ReactPaginate
    containerClassName={styles.pagination}
    pageClassName={styles.page}
    pageLinkClassName={styles.pageLink}
    activeClassName={styles.isActive}
    previousClassName={styles.isPrev}
    previousLinkClassName={styles.isPrevLink}
    nextClassName={styles.isNext}
    nextLinkClassName={styles.isNextLink}
    disabledClassName={styles.isDisabled}
    previousLabel={<span>prev</span>}
    nextLabel={<span>next</span>}
    pageCount={pageCount}
    marginPagesDisplayed={marginPagesDisplayed}
    pageRangeDisplayed={pageRangeDisplayed}
    onPageChange={onPageChange}
    initialPage={Number(initialPage)}
  />
)

Pagination.defaultProps = {
  marginPagesDisplayed: 3,
  pageRangeDisplayed: 1
}

export default Pagination
