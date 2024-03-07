import React, { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, Heading, useClipboard, useToast, Container, Image } from "@chakra-ui/react";
import { FaLink, FaCopy } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const { hasCopied, onCopy } = useClipboard(shortenedUrl);
  const toast = useToast();

  const handleShorten = () => {
    // TODO: Implement actual shortening logic with a backend service
    const fakeShortUrl = "http://sho.rt/" + Math.random().toString(36).substr(2, 6);
    setShortenedUrl(fakeShortUrl);
    toast({
      title: "URL Shortened!",
      description: "Your shortened URL is ready!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading mb={2}>URL Shortener</Heading>
          <Text>Shorten your long URLs easily</Text>
          <Image src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmwlMjBzaG9ydGVuZXJ8ZW58MHx8fHwxNzA5ODI0OTg2fDA&ixlib=rb-4.0.3&q=80&w=1080" mt={4} boxSize="150px" />
        </Box>
        <Box w="100%">
          <VStack>
            <HStack w="100%">
              <Input placeholder="Enter your long URL here" value={url} onChange={(e) => setUrl(e.target.value)} size="md" />
              <Button leftIcon={<FaLink />} colorScheme="teal" onClick={handleShorten}>
                Shorten
              </Button>
            </HStack>
            {shortenedUrl && (
              <HStack w="100%" mt={4}>
                <Input isReadOnly value={shortenedUrl} />
                <Button onClick={onCopy} leftIcon={<FaCopy />} colorScheme="blue">
                  {hasCopied ? "Copied" : "Copy"}
                </Button>
              </HStack>
            )}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
