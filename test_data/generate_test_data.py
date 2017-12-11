def generate_test_data(fileName, inputSize, N, K):
	file = open(fileName+".txt","w")
	file.write(str(N))
	file.write(" ")
	file.write(str(K))
	file.write("\n")
	for i in range(1,inputSize+1):
		file.write(str(randint(1, 200000)))
		file.write(" ")
	file.close()

generate_test_data("test-1-1-1.txt",1,1,1)
