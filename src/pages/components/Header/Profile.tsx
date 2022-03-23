import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Douglas Sena</Text>
            <Text color="gray.300" fontSize="small">
              dsena@rocketseat
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Douglas Sena"
            src="https://github.com/dsenam.png"
          />
        </Flex>
    )
}