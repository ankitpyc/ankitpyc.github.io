#include<bits/stdc++.h>
int gcd(int a,int b){

	if(a%b == 0)
		return 1;
	else{
		gcd(a,a%b);
	}
}
int main(int argc, char const *argv[])
{
	int T;
	cin>>T;
	for (int i = 0; i < T; ++i)
	{
		int a,b;
		cin>>a>>b;
		gcd(a,b);
	}
	
	return 0;
}