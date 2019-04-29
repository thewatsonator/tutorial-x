```javascript
const Card = ({ children }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6 mb-6">
    {children}
  </div>
);

const CardImage = ({ image, alt }) => (
  <img className="w-full" src={image} alt={alt} />
);

const CardTitle = ({ title }) => (
  <div className="font-bold text-xl mb-2">{title}</div>
);

const CardDescription = ({ description }) => (
  <p className="text-grey-darker text-base">{description}</p>
);

const Tag = ({ tag }) => (
  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
    #{tag}
  </span>
);

const Tags = ({ tags = [], title }) => {
  if (tags.length === 0) return <></>;
  const keyBase = encodeURIComponent(title);
  return (
    <div className="px-6 py-4">
      {tags.map((tag, index) => (
        <Tag tag={tag} key={keyBase + encodeURIComponent(tag) + index} />
      ))}
    </div>
  );
};

const VerticalCard = ({ image, alt, title, description, tags }) => (
  <Card>
    {!!image && <CardImage image={image} alt={alt} />}
    <div className="px-6 py-4">
      <CardTitle title={title} />
      <CardDescription description={description} />
    </div>
    <Tags tags={tags} title={title} />
  </Card>
);

const App = () => (
  <div className="m-6">
    <VerticalCard
      title="The Coldest sunset"
      image="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
      tags={["photography", "travel", "winter"]}
    />
  </div>
);
```
