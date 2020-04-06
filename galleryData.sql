CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(350) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INTEGER NOT NULL
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/bolt.jpg', 'Photo of Usain Bolt taken at the olympics.', 0),
('images/einstein.jpg', 'Photo of Albert Einstein.', 0),
('images/goggins.jpg','Photo of David Goggins.', 0),
('images/lavelle.jpg', 'Photo of Rose Lavelle.', 0),
('images/bekele.jpg', 'Photo of Kennenisa Bekele taken at the Olympics.', 0),
('images/neilAndRichard.jpg', 'Photo of Ricard Dawkins and Neil deGrasse Tyson.', 0),
('images/xavi.jpg', 'Photo of Xavi Hernadez.', 0)


 
    