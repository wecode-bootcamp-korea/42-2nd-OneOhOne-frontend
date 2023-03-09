import React, { useEffect, useState } from "react";
import { ThumbnailModal } from "./ThumbnailModal/ThumbnailModal";
import * as S from "./Thumbnail.style";

export const Thumbnail = () => {
  const [thumbnail, setThumbnail] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    document.body.style.overflow = modalOpen ? "auto" : "hidden";
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setThumbnail(data.data));
  }, []);

  const imgUrl = thumbnail.detailImages?.map(
    ({ detailImageSequence, detailImageUrl }) => {
      return { detailImageSequence, detailImageUrl };
    }
  );

  return (
    <S.ThumbnailLayout>
      {thumbnail.lectureId && (
        <>
          <S.HighlightLayout>
            <S.HighlightThumbnail
              key={thumbnail.detailImages[0]?.detailImageSequence}
              alt="thumbnail"
              src={thumbnail.detailImages[0]?.detailImageUrl}
            />
          </S.HighlightLayout>
          <S.AdditionalLayout>
            <S.AdditionalThumbnail
              key={thumbnail.detailImages[1]?.detailImageSequence}
              alt="thumbnail"
              src={thumbnail.detailImages[1]?.detailImageUrl}
            />
            <S.AdditionalThumbnail
              key={thumbnail.detailImages[2]?.detailImageSequence}
              alt="thumbnail"
              src={thumbnail.detailImages[2]?.detailImageUrl}
            />

            <S.ThumbnailButton onClick={handleModal}>
              +{thumbnail.detailImages.length}개의 이미지
            </S.ThumbnailButton>
            {modalOpen ? (
              <ThumbnailModal
                imgUrl={imgUrl}
                modalOpen={modalOpen}
                handleModal={handleModal}
              />
            ) : null}
          </S.AdditionalLayout>
        </>
      )}
    </S.ThumbnailLayout>
  );
};
