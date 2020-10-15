import React, { useEffect } from 'react';
import { useParams, withRouter } from 'react-router';
import './DetailPage.scss';
import { connect } from 'react-redux';
import { getDetail } from '../store/actions';
import { IGIF } from '../interface/gif.interface';
import { getViewingItem } from '../store/selectors';

export function DetailPage({
  getDetail,
  getViewingItem,
}: {
  getDetail: Function;
  getViewingItem?: IGIF;
}) {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    getDetail(id);
  }, []);

  return (
    <>
      <div className="detail-page">
        <div className="right">
          <img
            className="GIF-item"
            src={getViewingItem?.images.original.url}
            alt={getViewingItem?.title}
          />
        </div>
      </div>
    </>
  );
}

export const mapStateToProps = (state: any) => ({
  getViewingItem: getViewingItem(state),
});

export const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  getDetail: (id: string) => dispatch(getDetail(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailPage)
);
