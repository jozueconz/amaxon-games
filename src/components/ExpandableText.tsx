import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        colorScheme="yellow"
        fontWeight="bold"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
        size="xs"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
