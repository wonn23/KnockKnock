DROP DATABASE IF EXISTS knockknock;
CREATE DATABASE knockknock;

USE knockknock;

SELECT userAndTags.user_and_tag_id, userAndTags.user_id, userAndTags.tag_id, 
	   tagCategories.tag_category_id, tagCategories.tag_category_name, tags.tagname 
	FROM userAndTags

INSERT INTO tagCategories VALUES(NULL, '취미');
INSERT INTO tagCategories VALUES(NULL, '성격');
INSERT INTO tagCategories VALUES(NULL, '이상형');

INSERT INTO tags VALUES(NULL, '영화',1);
INSERT INTO tags VALUES(NULL, '코인노래방',1);
INSERT INTO tags VALUES(NULL, '맥주',1);
INSERT INTO tags VALUES(NULL, '카페',1);
INSERT INTO tags VALUES(NULL, '독서',1);
INSERT INTO tags VALUES(NULL, '맛집탐방',1);
INSERT INTO tags VALUES(NULL, '여행',1);
INSERT INTO tags VALUES(NULL, '등산',1);
INSERT INTO tags VALUES(NULL, '러닝',1);
INSERT INTO tags VALUES(NULL, '산책',1);
INSERT INTO tags VALUES(NULL, '댄스',1);
INSERT INTO tags VALUES(NULL, '골프',1);
INSERT INTO tags VALUES(NULL, '헬스',1);
INSERT INTO tags VALUES(NULL, '필라테스',1);
INSERT INTO tags VALUES(NULL, '홈트레이닝',1);
INSERT INTO tags VALUES(NULL, '클라이밍',1);
INSERT INTO tags VALUES(NULL, '자전거라이딩',1);
INSERT INTO tags VALUES(NULL, '캠핑',1);
INSERT INTO tags VALUES(NULL, '공부',1);
INSERT INTO tags VALUES(NULL, '볼링',1);
INSERT INTO tags VALUES(NULL, '요리',1);
INSERT INTO tags VALUES(NULL, '그림 그리기',1);
INSERT INTO tags VALUES(NULL, '음악 듣기',1);
INSERT INTO tags VALUES(NULL, '악기 여주',1);
INSERT INTO tags VALUES(NULL, '사진 찍기',1);
INSERT INTO tags VALUES(NULL, '웹툰',1);
INSERT INTO tags VALUES(NULL, '게임',1);
INSERT INTO tags VALUES(NULL, '전시회 관람',1);
INSERT INTO tags VALUES(NULL, '봉사활동',1);
INSERT INTO tags VALUES(NULL, '드라이브',1);

INSERT INTO tags VALUES(NULL, '활발한',2);
INSERT INTO tags VALUES(NULL, '조용한',2);
INSERT INTO tags VALUES(NULL, '애교가 넘치는',2);
INSERT INTO tags VALUES(NULL, '어른스러운',2);
INSERT INTO tags VALUES(NULL, '열정적인',2);
INSERT INTO tags VALUES(NULL, '또라이 같은',2);
INSERT INTO tags VALUES(NULL, '예의바른',2);
INSERT INTO tags VALUES(NULL, '유머러스한',2);
INSERT INTO tags VALUES(NULL, '꼼꼼한',2);
INSERT INTO tags VALUES(NULL, '진지한',2);
INSERT INTO tags VALUES(NULL, '자신감 넘치는',2);
INSERT INTO tags VALUES(NULL, '허세없는',2);
INSERT INTO tags VALUES(NULL, '엉뚱한',2);
INSERT INTO tags VALUES(NULL, '지적인',2);
INSERT INTO tags VALUES(NULL, '성실한',2);
INSERT INTO tags VALUES(NULL, '감성적인',2);
INSERT INTO tags VALUES(NULL, '논리적인',2);
INSERT INTO tags VALUES(NULL, '증흑적인',2);
INSERT INTO tags VALUES(NULL, '소심한',2);
INSERT INTO tags VALUES(NULL, '쿨한',2);

INSERT INTO tags VALUES(NULL, '옷 잘 입는',3);
INSERT INTO tags VALUES(NULL, '듬직한',3);
INSERT INTO tags VALUES(NULL, '아담한',3);
INSERT INTO tags VALUES(NULL, '연상',3);
INSERT INTO tags VALUES(NULL, '연하',3);
INSERT INTO tags VALUES(NULL, '동갑',3);
INSERT INTO tags VALUES(NULL, '취미가 같은',3);
INSERT INTO tags VALUES(NULL, '말이 통하는',3);
INSERT INTO tags VALUES(NULL, '잘 웃어주는',3);
INSERT INTO tags VALUES(NULL, '잘 들어주는',3);
INSERT INTO tags VALUES(NULL, '활발한',3);
INSERT INTO tags VALUES(NULL, '조용한',3);
INSERT INTO tags VALUES(NULL, '애교가 넘치는',3);
INSERT INTO tags VALUES(NULL, '어른스러운',3);
INSERT INTO tags VALUES(NULL, '열정적인',3);
INSERT INTO tags VALUES(NULL, '또라이 같은',3);
INSERT INTO tags VALUES(NULL, '예의바른',3);
INSERT INTO tags VALUES(NULL, '유머러스한',3);
INSERT INTO tags VALUES(NULL, '꼼꼼한',3);
INSERT INTO tags VALUES(NULL, '진지한',3);
INSERT INTO tags VALUES(NULL, '자신감 넘치는',3);
INSERT INTO tags VALUES(NULL, '허세없는',3);
INSERT INTO tags VALUES(NULL, '엉뚱한',3);
INSERT INTO tags VALUES(NULL, '지적인',3);
INSERT INTO tags VALUES(NULL, '성실한',3);
INSERT INTO tags VALUES(NULL, '감성적인',3);
INSERT INTO tags VALUES(NULL, '논리적인',3);
INSERT INTO tags VALUES(NULL, '증흑적인',3);
INSERT INTO tags VALUES(NULL, '소심한',3);
INSERT INTO tags VALUES(NULL, '쿨한',3);

